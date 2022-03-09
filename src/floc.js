export default function Floc({ x, y }) {
    return (
      <span
        style={{ top: `${y}%`, left: `${x}%` }}
        className="floc"
      >
        ❄️
      </span>
    );
   }
   