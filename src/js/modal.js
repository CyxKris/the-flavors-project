
const openModal = (id) => {
    console.log("Modal is working...");

    const returnedItem = id;
    console.log("🚀 ~ file: modal.js:6 ~ openModal ~ returnedItem:", returnedItem)

    document.getElementById(thePlace).innerHTML = returnedItem;
}