export default function Error({ message }: { message: string }) {
  return <div className="text-red-600 font-medium">Error: {message}</div>;
}
