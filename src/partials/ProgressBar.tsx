export interface ProgressBarProps {
  name: string;
  prec: number;
}

const ProgressBar = (props: ProgressBarProps) => {
  return (
    <div className="w-1/2 p-3">
      <div>{props.name}</div>
      <div className="w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className="rounded-full bg-cyan-600 p-0.5 text-center text-xs font-medium leading-none text-blue-100"
          style={{ width: `${props.prec}%` }}
        >
          {' '}
          {props.prec}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
