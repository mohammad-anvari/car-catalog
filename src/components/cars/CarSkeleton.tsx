export default function CarSkeleton() {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden animate-pulse">
        {/* جای عکس */}
        <div className="h-48 bg-slate-800 w-full" />
        
        {/* بدنه کارت */}
        <div className="p-5 space-y-4">
          <div className="flex justify-between items-start">
            <div className="h-5 bg-slate-800 rounded w-2/3" />
            <div className="h-5 bg-slate-800 rounded w-1/4" />
          </div>
  
          <div className="flex gap-2">
            <div className="h-4 bg-slate-800 rounded w-16" />
            <div className="h-4 bg-slate-800 rounded w-16" />
          </div>
  
          <div className="pt-2 border-t border-slate-800/80 flex justify-between items-center">
            <div className="h-6 bg-slate-800 rounded w-24" />
            <div className="h-4 bg-slate-800 rounded w-12" />
          </div>
        </div>
      </div>
    );
  }