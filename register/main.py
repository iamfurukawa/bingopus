import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

import random
import uuid

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

    return sorted(one + two + three + four + five)


def verifyForDuplicate(games, gameNew):
    eq = False
    for g in games:
        if(gameNew == g):
            eq = True
    return eq


def generateMultipleGames(number=500):
    games = []
    for _ in range(0, number):
        game = generateCard()
        eq = verifyForDuplicate(games, game)
        if eq == False:
            print(game)
            games.append(game)
            saveGameOnFirebase(game)
        else:
            print('Game duplicated!')


def newSingleGame():
    games = getAllOfFirebase()
    game = generateCard()
    eq = verifyForDuplicate(games, game)
    if eq == False:
        print(game)
        saveGameOnFirebase(game)
        return
    else:
        print('Game duplicated!')


def saveGameOnFirebase(game=''):
    return


def getAllOfFirebase():
    return []

#games = generateMultipleGames()


refPessoa = db.collection('pessoas').document('43196786803')
data = {
    'nome': 'Vinicius 2',
    'games': {
            '1': [6, 7, 10, 11, 13, 16, 19, 20, 23, 25, 33, 35, 37, 43, 47, 53, 56, 58, 59, 65, 66, 69, 72, 75],
            '2': [3, 9, 11, 13, 14, 17, 18, 20, 23, 25, 36, 38, 41, 42, 49, 50, 56, 58, 59, 61, 63, 68, 70, 71],
            '3': [2, 6, 10, 12, 15, 17, 18, 22, 25, 29, 36, 42, 44, 45, 48, 49, 51, 54, 60, 61, 62, 68, 69, 71]
    },
}
refPessoa.set(data)
