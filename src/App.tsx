import './style.css';

export const App = ({ name }: { name: string }) => {
  return (
    <div>
      <h1>
        Hello {name}!
      </h1>
    </div>
  );
};
