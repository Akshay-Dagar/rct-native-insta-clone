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

export const profileImageRandomizer = () => {
  const num = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  switch(num) {
    case 1:
      return require("./assets/profile.jpg")
    case 2:
      return require("./assets/dog.jpg")
    case 3:
      return require("./assets/cat.jpg")
    case 4:
      return require("./assets/beaver.jpg")
    default:
      return require("./assets/profile.jpg")
  }
}

// export const bgImagePicker = idx => {
//   switch(idx) {
//     case 0:
//       return require("./assets/background.jpg")
//     case 1:
//       return require("./assets/background2.jpg")
//     case 2:
//       return require("./assets/background3.jpg")
//     case 3:
//       return require("./assets/background4.jpg")
//     case 4:
//       return require("./assets/background5.jpg")
//     case 5:
//       return require("./assets/background6.jpg")
//     case 6:
//       return require("./assets/background7.jpg")
//     default:
//       return require("./assets/background.jpg")
//   }
// }

export const dateOptions = {
  weekday: "long", //to display the full name of the day, you can use short to indicate an abbreviation of the day
  day: "numeric",
  month: "long", //to display the full name of the month
  year: "numeric"
}