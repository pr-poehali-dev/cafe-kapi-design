export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-100/30 to-green-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-green-100/25 to-orange-100/25 rounded-full blur-3xl"></div>
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 w-60 h-60 bg-gradient-to-r from-orange-100/20 to-blue-100/20 rounded-full blur-3xl"></div>
    </div>
  );
}
