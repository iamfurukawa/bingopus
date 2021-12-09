import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

import random
import csv

cred = credentials.Certificate('./bingopus.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

def generateCard():
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

def verifyForDuplicate(games, gameNew):
    eq = False
    for g in games:
        if(gameNew == g):
            eq = True
    return eq

def generateMultipleGames(number=500):
    games = []
    gamesUnordered = []
    for _ in range(0, number):
        game = generateCard()
        gameSorted = sorted(game)
        eq = verifyForDuplicate(games, gameSorted)
        if eq == False:
            # print(game)
            # print(gameSorted)
            gamesUnordered.append(game)
            games.append(gameSorted)
        else:
            print('Game duplicated!')

    return games, gamesUnordered

def newSingleGame(nome, document):
    games = getAllOfFirebase()
    game = generateCard()
    gameSorted = sorted(game)
    eq = verifyForDuplicate(games, gameSorted)
    if eq == False:
        saveGameOnFirebase(game, {
            'nome': nome,
            'document': document
        })
        print('saved!')
        return
    else:
        print('Game duplicated!')

def saveGameOnFirebase(games=[], people={}):
    refPessoa = db.collection('pessoas').document(people['document'])
    data = {
        'nome': people['nome'],
        'games': {
            '1': games,
        },
    }
    refPessoa.set(data, merge=True)

def getAllOfFirebase():
    refPessoa = db.collection('pessoas')
    docs = refPessoa.stream()
    games = []
    for doc in docs:
        games.append(sorted(doc.to_dict()['games']['1']))
    return games

def createData():
    _, gamesUnordered = generateMultipleGames()

    with open('C:/Users/vinicius.carvalho/Downloads/cpfs.csv', newline='\n', encoding='utf-8') as csvfile:
        reader = csv.reader(csvfile, delimiter=';')
        for idx, row in enumerate(reader):
            saveGameOnFirebase(gamesUnordered[idx], {
                'nome': row[0],
                'document': row[2]
            })
            print('{} - {} - {} - {}'.format(row[0], row[1], row[2], gamesUnordered[idx]))

# Create all data based on csv file that contains 3 columns separated with ;
# The csv file contains the format: Name;Email;CPF(without pontuaction)
# The function create just one game, to generate another one you must change the games dict in saveGameOnFirebase().
# This function validade if the game is repeated.
#createData()

# Create data using a name and CPF(without pontuaction)
# The function create just one game, to generate another one you must change the games dict in saveGameOnFirebase().
# If you need create a specific game (1, 2, 3...) you need change getAllOfFirebase index too.
# This function validade if the game is repeated.
#newSingleGame('fulano', '123456789')
