import logsData from "@/components/static/updated-logs";

const Page = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Updated Feature</h1>
      <div className="flex flex-col gap-3">
        {Object.keys(logsData).map((date, index) => (
          <div
            className="flex flex-col gap-3 hover:bg-gray-100 dark:hover:bg-gray-900 py-3 px-2"
            key={index}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 border-l-2 pl-2">
              {date}
            </p>
            <div className="flex flex-col gap-1">
              {logsData[date].map((log: string, key: number) => (
                <li key={key}>{log}</li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
