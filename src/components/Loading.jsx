const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[60vh]">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-gray-900"></div>
      <div className="ml-4 text-gray-900 text-2xl font-semibold">
        Loading...
      </div>
    </div>
  );
};

export default Loading;
