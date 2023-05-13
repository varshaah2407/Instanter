// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import AudioRecorderPlayer from 'react-native-audio-recorder-player';
// import { SpeechClient } from '@google-cloud/speech';
// import RNFS from 'react-native-fs';
// import Sound from 'react-native-sound';
// import key from './key.json';
// // import util from 'util';
// import { Util } from 'expo';
// // Util.someMethod();
// const client = new SpeechClient({
  
//   projectId: 'instanter',
//   keyFilename: key
// });

// export default function Test() {
//   const [isRecording, setIsRecording] = useState(false);
//   const [transcription, setTranscription] = useState('');
//   const [audioFile, setAudioFile] = useState('');
//   const [isPlaying, setIsPlaying] = useState(false);

//   const audioRecorderPlayer = new AudioRecorderPlayer();
//   const sound = new Sound(audioFile, '', error => {
//     if (error) {
//       console.error(error);
//     }
//   });

//   async function startRecording() {
//     try {
//       const result = await audioRecorderPlayer.startRecorder();
//       setIsRecording(true);
//       setAudioFile(result);
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   async function stopRecording() {
//     try {
//       const result = await audioRecorderPlayer.stopRecorder();
//       setIsRecording(false);
//       setAudioFile(result);
//       transcribeAudio(result);
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   async function transcribeAudio(audioFile) {
//     try {
//       const buffer = await RNFS.readFile(audioFile, 'base64');
//       const [response] = await client.recognize({
//         audio: {
//           content: buffer
//         },
//         config: {
//           encoding: 'LINEAR16',
//           sampleRateHertz: 16000,
//           languageCode: 'en-US'
//         }
//       });
//       const transcription = response.results
//         .map(result => result.alternatives[0].transcript)
//         .join('\n');
//       setTranscription(transcription);
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   function playAudio() {
//     setIsPlaying(true);
//     sound.play(() => {
//       setIsPlaying(false);
//     });
//   }

//   return (
//     <View>
//       <TouchableOpacity onPress={isRecording ? stopRecording : startRecording}>
//         <Text>{isRecording ? 'Stop Recording' : 'Start Recording'}</Text>
//       </TouchableOpacity>
//       {audioFile && (
//         <TouchableOpacity onPress={playAudio}>
//           <Text>{isPlaying ? 'Playing...' : 'Play Audio'}</Text>
//         </TouchableOpacity>
//       )}
//       <Text>{transcription}</Text>
//     </View>
//   );
// }
