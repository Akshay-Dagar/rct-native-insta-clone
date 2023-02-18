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

export const dateOptions = {
  weekday: "long", //to display the full name of the day, you can use short to indicate an abbreviation of the day
  day: "numeric",
  month: "long", //to display the full name of the month
  year: "numeric"
}