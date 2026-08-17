import Link from 'next/link';
import Translate from '@/components/ui/Translate';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-4xl font-bold font-enHeading text-text-highlight mb-4">
        <Translate en="404 - Not Found" ar="٤٠٤ - غير موجود" />
      </h2>
      <p className="text-text-secondary mb-8 max-w-md">
        <Translate 
          en="Could not find the requested resource or page." 
          ar="تعذر العثور على المورد أو الصفحة المطلوبة." 
        />
      </p>
      <Link 
        href="/"
        className="btn-primary"
      >
        <Translate en="Return Home" ar="العودة للرئيسية" />
      </Link>
    </div>
  );
}
