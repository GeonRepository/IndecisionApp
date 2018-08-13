console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) =>{
  e.preventDefault();
  
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderOption();
  }
};

const removeAll = (e) => {
  e.preventDefault();

  if(app.options) {
    app.options = [];
    renderOption();
  }
}

const onMakeDecision = () => {
  const rng = Math.floor(Math.random() * app.options.length);
  const option = app.options[rng];
  alert(option);
}

// const template = (
//   <div>
//     <h1>{app.title}</h1>
//     {app.subtitle && <p>{app.subtitle}</p>}
//     <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//     <p>{app.options.length}</p>
//     <button onClick={removeAll}>Remove</button>
//     <ol>
//       <li>Item one</li>
//       <li>Item two</li>
//     </ol>
//     <form onSubmit={onFormSubmit}>
//       <input type="text" name="option"/>
//       <button> Add Option</button>
//     </form>
//   </div>
// );

const appRoot = document.getElementById('app');

const renderOption = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAll}>Reset</button>
      <ol>
      {
        app.options.map((option) => {
          return <li key={option}> {option}</li>;
        })
      }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button> Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
  
}

renderOption();