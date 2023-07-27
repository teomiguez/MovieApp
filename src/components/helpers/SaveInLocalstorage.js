export const SaveInLocalstorage = (key, element) => {
    // Get the data that is in storage
    let storage = JSON.parse(localStorage.getItem(key));

    // Check if it is Array
    if (Array.isArray(storage))
    {
        // Add element to Array
        storage.push(element);
    }
    else
    {
        // Create Array
        storage = [element];
    }

    // Save to local storage
    localStorage.setItem(key, JSON.stringify(storage));

    // Return saved object
    return element;
}