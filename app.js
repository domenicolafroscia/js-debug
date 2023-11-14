const input = document.querySelector('input');
const array = []; // 1. Ho sostituito il null con le graffe, perchè solo così possiamo considerarlo un array vuoto

input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter')    return;
    if (input.value.length == '') return;

    array.push(input.value);   // 2. Ho messo push al posto di add, perchè bisognava inserire un valore dentro un array ed è possibile solo con push

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = input.value;  //    3. Ho inserito innerHTML al posto di text per stampare in pagina il valore del dato
    document.querySelector('ul').append(li);   // 4. Al posto di push ho inserito append, perchè il push aggiunge un elemento alla lista di un array, mentre l'append (come dice stesso la parola) appende alla pagina il dato da stampare


    let counter = 0;   // 5. Ho messo lo 0 al posto degli apici, perchè altrimenti non sarebbe mai stata incrementata questa variabile
    let item    = array[0];
    let max   = 1;    // 6. Ho messo let al posto di const, perchè si tratta di una variabile globale, dunque il const non è adatto perchè non può essere utilizzato nei cicli successivi qui sotto
    const elems = [];

    for (let i = 0; i < array.length; i++) {   // 7. Ho inserito il .length 
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        for (let j = i; j < array.length; i++) {
            if (array[i] == array[j]) {
                counter++;
                if (max < counter) {    // 8. Ho aggiunto le graffe alla condizione if, perchè senza è un errore di sintassi
                    max  = counter;
                    item = array[i];
                } 
                
            }
        }

        counter = 0;
    }

    const alert = document.getElementsByClassName('alert');

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    console.log(`${item} trovato ${max} volte`);  // 9. Ho tolto gli apici e al loro posto ho messo i backtick, perchè solo con questi ultimi si può effettuare la concatenazione
});


// Ho trovato soltanto 9 errori, non riesco a rintracciare gli altri 3