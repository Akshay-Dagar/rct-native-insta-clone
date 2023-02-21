import { ToastAndroid } from 'react-native';

// Display the toast message for 3 seconds
export const showToast = (message) => {
  ToastAndroid.show(message, ToastAndroid.CENTER);
};

export const imgToBase64 = async imgUrl => {
    const response = await fetch(imgUrl);
    const data = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(data);
    })
}

export const generateChunks = base64String  => {
  const chunkSize = 10000;
  const totalChunks = Math.ceil(base64String.length / chunkSize);

  const chunks = [];

  for (let i = 0; i < totalChunks; i++) {
    const start = i * chunkSize;
    const end = start + chunkSize;
    chunks.push(base64String.slice(start, end))
  }

  return chunks
}

export const dateOptions = {
  weekday: "long", //to display the full name of the day, you can use short to indicate an abbreviation of the day
  day: "numeric",
  month: "long", //to display the full name of the month
  year: "numeric"
}