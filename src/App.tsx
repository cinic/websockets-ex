import './style.css';

export const App = ({ name }: { name: string }) => {
  return (
    <div>
      <h1>
        Hello {name}!
      </h1>
      <div className="controls">
        <div className="input">
          <input type="text" /> <em />
        </div>
        <div className="copy">btn</div>
        <div className="delete">btn2</div>
      </div>
    </div>
  );
};

function numberFormatter() {
  return Intl.NumberFormat().format(100000.0);
}
