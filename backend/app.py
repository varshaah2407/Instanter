
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
from flask import Flask, redirect, url_for, request

from google.cloud import speech
client = speech.SpeechClient.from_service_account_file('./key.json')
import os 
from pydub import AudioSegment
import subprocess

from flask_cors import CORS, cross_origin
app = Flask(__name__)


CORS(app) 
 



#     return 'welcome %s' % name
stop_words = set(stopwords.words('english'))
lemmatizer = WordNetLemmatizer()

def extract_keywords(transcription):
    sentences = nltk.sent_tokenize(transcription)
    message = ' '.join(sentences)
    
    words = word_tokenize(message)
    
    tagged_words = nltk.pos_tag(words)
    
    named_entities = nltk.ne_chunk(tagged_words, binary=True)
    
    filtered_words = []
    for word, tag in tagged_words:
        if word.lower() not in stop_words and tag.startswith(('N', 'V')):
            filtered_words.append(lemmatizer.lemmatize(word.lower()))
    
    frequency_dist = nltk.FreqDist(filtered_words)
    sorted_words = sorted(frequency_dist.items(), key=lambda x: x[1], reverse=True)
    print (sorted_words)
    # print()
    return sorted_words[:10]
 

@app.route('/file', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        file_contain = request.files["file"]
        file_name = request.files["file"].filename
        # file_name2 = os.path.splitext(file_name)[0] + '.mp3'
        file_path = os.path.join("./data/",  file_name)
        # file_path2 = os.path.join("./data",file_name2)
        print(file_path,"file path",file_name)
        file_contain.save(file_path)
        input_file = file_path
        # subprocess.call(["ffmpeg", "-i", input_file, file_name2])
        # return "file saved"
        
        
        
        # absolute_path = os.path.abspath(file_path)
        # print(file_name2)
        # output_file = os.path.join("./data", 'output.mp3')
        # sound = AudioSegment.from_file(absolute_path, 'm4a')
        # sound.export(file_path2, format="mp3")
        # sound.export(output_file, format='mp3')
        # remove recording after conversion
        # os.remove(absolute_path)
        # return "Hello"
        print("file saved")
        with open(file_path, 'rb') as f: 
             
                mp3_data = f.read()

                audio_file = speech.RecognitionAudio(content=mp3_data)
    
                config = speech.RecognitionConfig(
                # sample_rate_hertz=44100,
                enable_automatic_punctuation=True,
                language_code='en-US'
                )

                response = client.recognize(
                    config=config,
                    audio=audio_file
                )
            
                transcription = ""
                for result in response.results:
                    transcription += result.alternatives[0].transcript
                # print(transcription)
                # return transcription
        
                keywords = extract_keywords(transcription)
                print(keywords)
                return keywords 
        
        
        # with (file_name,'rb') as f:
        #     mp3_data = f.read()
        #     return mp3_data


            
        # return request.files["file"].filename
        # return "File checking"
        # user = request.form['nm']
        # return redirect(url_for('success', name=user))
    else:
        # user = request.args.get('nm')
        return "OOPS"
 # Load the NLTK stop words and lemmatizer


# Example usage: extract keywords from a sample transcription
# transcription = "The quick brown fox jumps over the lazy dog. The dog barks at the fox, but the fox keeps running."
# keywords = extract_keywords(transcription)
# print(keywords) 

 
if __name__ == '__main__':
    app.run(debug=True)
