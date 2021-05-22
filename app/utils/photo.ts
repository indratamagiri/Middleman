import * as ImagePicker from 'react-native-image-picker';


export const launchImage = (setResponse: (data: ImagePicker.ImagePickerResponse) => void) => {
  ImagePicker.launchImageLibrary(
    {
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 450,
      maxWidth: 450,
    },
    (callback) => {
      setResponse(callback);
    },
  );
};