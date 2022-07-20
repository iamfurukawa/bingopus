import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

import random
import csv

# Initialize app
cred = credentials.Certificate('./bingopus.json')
firebase_admin.initialize_app(cred)
db = firestore.client()
DEBUG = False

#CSV Variables
CSV_PATH = 'C:/Users/vinicius.carvalho/Downloads/cpfs-julina.csv'
COL_NAME = 0
COL_DOCUMENT = 1

#Game Parameters
gamesByPerson = 3
gameIdStart = 1

def generateGame():
    #0, 15, 30, 45, 60
    one = []
    while len(one) < 5:
        rand = random.randint(1, 15)
        if rand not in one:
            one.append(rand)

    two = []
    while len(two) < 5:
        rand = random.randint(1, 15) + 15
        if rand not in two:
            two.append(rand)

    three = []
    while len(three) < 4:
        rand = random.randint(1, 15) + 30
        if rand not in three:
            three.append(rand)

    four = []
    while len(four) < 5:
        rand = random.randint(1, 15) + 45
        if rand not in four:
            four.append(rand)

    five = []
    while len(five) < 5:
        rand = random.randint(1, 15) + 60
        if rand not in five:
            five.append(rand)

    # print()
    # print(one)
    # print(two)
    # print(three)
    # print(four)
    # print(five)

    return one + two + three + four + five

def retrieveRowCountFromCSV():
    rowCount = 0
    for _ in open(CSV_PATH):
        rowCount += 1
    return rowCount

def verifyForDuplicate(games, gameNew):
    for game in games:
        if(gameNew == game):
            return True
    return False

def generateMultipleGames(number=10):
    gamesOrdered = []
    gamesUnordered = []

    print('Generating {} games...'.format(number))
    for _ in range(0, number):
        game = generateGame()
        gameSorted = sorted(game)
        eq = verifyForDuplicate(gamesOrdered, gameSorted)
        if eq == False:
            gamesUnordered.append(game)
            gamesOrdered.append(gameSorted)
        else:
            print('Game duplicated found!')

    print('{} games generated!'.format(number))
    return gamesUnordered

def saveGameOnFirebase(game=[], people={}, gameId='1'):
    if DEBUG is True:
        return
        
    refPessoa = db.collection('pessoas').document(people['document'])
    data = {
        'nome': people['nome'],
        'games': {
            str(gameId): game,
        },
    }
    refPessoa.set(data, merge=True)
    print('Saved! gameId={} people={} game={}'.format(gameId, people['nome'], game))

def getAllOfFirebaseSorted(gameId='1'):
    refPessoa = db.collection('pessoas')
    docs = refPessoa.stream()
    games = []
    for doc in docs:
        games.append(sorted(doc.to_dict()['games'][str(gameId)]))
    return games

def createSingleGame(nome, document, gameId='1'):
    gamesOrdered = getAllOfFirebaseSorted(gameId)
    game = generateGame()
    gameSorted = sorted(game)
    eq = verifyForDuplicate(gamesOrdered, gameSorted)
    if eq == False:
        saveGameOnFirebase(game, {
            'nome': nome,
            'document': document
        }, gameId)
        return
    else:
        print('Game duplicated!')

def createAllGamesFromCSV():
    qtyPeople = retrieveRowCountFromCSV()
    print('Generating {} games for {} people, total {} games...'.format(gamesByPerson, qtyPeople, gamesByPerson * qtyPeople))
    games = generateMultipleGames(gamesByPerson * qtyPeople)
    gameIdx = 0

    if DEBUG is True:
        input('Press ENTER to continue...')

    with open(CSV_PATH, newline='\n', encoding='utf-8') as csvfile:
        reader = csv.reader(csvfile, delimiter=';')
        for person in reader:
            if DEBUG is True:
                print('document={}\t nome={}'.format(person[COL_DOCUMENT].replace('.', '').replace('-', ''), person[COL_NAME]))
            for gameId in range(gameIdStart, gameIdStart + gamesByPerson):
                if DEBUG is True:
                    print('gameId={} games[{}]={}'.format(gameId, gameIdx, games[gameIdx]))
                saveGameOnFirebase(games[gameIdx], {
                    'nome': person[COL_NAME],
                    'document': person[COL_DOCUMENT].replace('.', '').replace('-', '')
                }, gameId)
                gameIdx += 1

# Create all data based on csv file, IGNORING HEADER!!!
# This function validade if the game is repeated. Considering ordered.
#createAllGamesFromCSV()

# Create data using a name, CPF(without pontuaction) and gameId
# The function create just one game.
# This function validade if the game is repeated. Considering unordered!
#createSingleGame('fulano', '123456789', '1')

