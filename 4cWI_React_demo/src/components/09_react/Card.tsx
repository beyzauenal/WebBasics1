type CardProps = {
  title: string;
  description: string;
};

export default function Card({ title, description }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
