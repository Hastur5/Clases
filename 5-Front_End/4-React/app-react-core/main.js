//Manipulación del DOM

const root = document.getElementById('div-root');
const newElement = document.createElement('div');

// newElement.textContent = 'Hola Fili con DOM';
// newElement.className = 'container';

// root.appendChild(newElement);

/**Manipulación con REACT viejito sin JSX*/
// spread operator

const elementReact = React.createElement('span', {},'Hola Fili pero con REACT');

//Reac.createElemente ( type = HTML, {Agregando nodo hijo, 'Texto del elemento' || null})
const secondElementReact = React.createElement('div',{
    children: React.createElement(
        'h2', 
        {
            children: React.createElement('span', 
                {
                    children: React.createElement(),
                    className: 'style-span',
                }, 
                'este es el span'
            ),
            className: 'style-span',
        }, 
    'Este es un <h2> dentro de un div'
    ),
});

ReactDOM.render(secondElementReact,root);