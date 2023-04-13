const generateList = (arr) => {
    let list = document.createElement('ul');

    for (let i = 0; i < arr.length; i++) {
        let item = document.createElement('li');

        if (Array.isArray(arr[i])) {
            item.appendChild(generateList(arr[i]));
        } else {
            item.appendChild(document.createTextNode(arr[i]));
        }

        list.appendChild(item);
    }

    let container = document.createElement('div');
    container.classList.add('list-container');
    container.appendChild(list);

    return container;
}

let arr = [1, 2, [1.1, 1.2, 1.3], 3, [1.5, 2.6, 5, 8], 9];
let list = generateList(arr);
document.body.appendChild(list);
