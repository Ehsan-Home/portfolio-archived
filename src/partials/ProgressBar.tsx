export interface ProgressBarProps {
  name: string;
  prec: number;
}

const ProgressBar = (props: ProgressBarProps) => {
  return (
    <>
      <div className="mb-1 flex justify-between">
        <span className="text-base font-medium text-white dark:text-white">
          {props.name}
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-white">
          {props.prec}
        </span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className="h-2.5 rounded-full bg-blue-600"
          style={{ width: `${props.prec}%` }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
