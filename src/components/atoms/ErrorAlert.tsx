import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

interface ErrorAlertProps {
  message?: string;
}

export default function ErrorAlert({
  message = "Something went wrong. Please try again later.",
}: ErrorAlertProps) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
      <ExclamationTriangleIcon className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
      <p>{message}</p>
    </div>
  );
}
