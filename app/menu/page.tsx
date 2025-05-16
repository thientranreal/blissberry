import Image from "next/image";
import { CheckCircle, Flame, Heart, Star } from "lucide-react";

export default function MenuPage() {
  const sets = [
    { name: "Set 4", description: "4 vị tuỳ chọn", price: "115k" },
    { name: "Set 10", description: "10 vị cố định", price: "285k" },
    {
      name: "Set 20",
      description: "10 vị cố định",
      price: "495k",
      badge: "HOT",
    },
    {
      name: "Set 30",
      description: "10 vị cố định",
      price: "720k",
      badge: "BEST SELLER",
    },
  ];

  const flavors = [
    "Chocolate Mint",
    "Mousse Yaourt Dâu Tây",
    "Mousse Bắp Mỹ",
    "Tiramisu",
    "Mousse Dưa Lưới",
    "Mousse Yaourt Việt Quất",
    "Mousse Xoài",
    "Mousse Vanilla",
    "Mousse Matcha",
    "Cheesecake Chanh Dây",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-50 p-6 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-rose-500">
          Mix & Match Mini Cup
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <Image
              src="/cake-1.jpeg"
              alt="Mini Cup Sets"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />

            <Image
              src="/cake-2.jpeg"
              alt="Mini Cup Sets"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg mt-5"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Chọn Set Mix tiện lợi (4x4cm)
            </h2>
            <ul className="space-y-4">
              {sets.map((set) => (
                <li
                  key={set.name}
                  className="bg-white p-4 rounded-xl shadow flex items-center justify-between hover:bg-rose-50 transition cursor-pointer"
                >
                  <div>
                    <p className="text-lg font-medium">{set.name}</p>
                    <p className="text-sm text-gray-500">{set.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-rose-500">
                      {set.price}
                    </p>
                    {set.badge && (
                      <span className="text-xs text-white bg-rose-400 px-2 py-1 rounded-full ml-2">
                        {set.badge}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-4">
                10 vị Mousse & Cheese Cake yêu thích nhất
              </h2>
              <ul className="flex flex-wrap gap-4 text-md">
                {flavors.map((flavor, index) => (
                  <li
                    key={index}
                    className="bg-white p-3 rounded-xl shadow hover:bg-yellow-100 transition flex items-center gap-2"
                  >
                    {flavor}
                    {index === 0 && (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    )}
                    {index === 3 && <Heart className="w-6 h-6 text-rose-500" />}
                    {index === 6 && (
                      <Star className="w-6 h-6 text-yellow-400" />
                    )}
                    {index === flavors.length - 1 && (
                      <Flame className="w-6 h-6 text-orange-500" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
