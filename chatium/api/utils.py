import os, random
import hashlib

def selectRandomFile(path):
    random_file = random.choice(os.listdir(path))
    print(random_file)
    return random_file


# uses hashing algorithm: sha256
def hashText(text): 
    encrypted_txt = hashlib.sha256(text.encode()).hexdigest()
    return encrypted_txt

