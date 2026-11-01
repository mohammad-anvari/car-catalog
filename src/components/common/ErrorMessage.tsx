interface ErrorMessageProps {
    message: string;
    onRetry?: () => void;
  }
  
  export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 bg-slate-900/60 border border-red-500/20 rounded-2xl text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center text-xl font-bold">
          !
        </div>
  
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-slate-100">خطا در دریافت اطلاعات</h3>
          <p className="text-sm text-slate-400 max-w-md">{message}</p>
        </div>
  
        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="mt-2 px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition border border-slate-700"
          >
            تلاش مجدد
          </button>
        )}
      </div>
    );
  }