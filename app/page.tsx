import Barcode from "@/components/barcode";
import {
  BadgeCheck,
  ShoppingCart,
  Truck,
  Star,
  Gift,
  Cake,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-orange-50 min-h-screen font-sans">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4">
        <div className="text-sm text-black">☕ Bạn ơi, Cake nhé!</div>
        <div className="relative">
          <BadgeCheck className="w-6 h-6 text-orange-400" />
          <span className="absolute -top-2 -right-2 bg-white text-xs px-1.5 py-0.5 rounded-full shadow text-orange-500 font-semibold">
            9
          </span>
        </div>
      </div>

      {/* User Card */}
      <div className="bg-gradient-to-br from-orange-300 to-orange-500 rounded-xl mx-4 p-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-white">Hello World</div>
            <div className="text-xs text-white">Vàng</div>
          </div>
          <button className="bg-white text-orange-500 text-xs px-3 py-1 rounded-full font-semibold">
            Đổi 330 CAKE
          </button>
        </div>
        <div className="mt-4 bg-white rounded-xl p-3 flex flex-col items-center">
          <Barcode value="M901029000M901029000M901029000" />
          <div className="text-sm text-black mt-2">M901029000</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-4 gap-2 p-4 text-center text-xs">
        <div className="flex flex-col items-center">
          <Truck className="w-6 h-6 text-orange-400" />
          <span className="text-black">Giao hàng</span>
        </div>
        <div className="flex flex-col items-center">
          <ShoppingCart className="w-6 h-6 text-orange-400" />
          <span className="text-black">Mang đi</span>
        </div>
        <div className="flex flex-col items-center">
          <Cake className="w-6 h-6 text-orange-400" />
          <span className="text-black">Mousse trái cây</span>
        </div>
        <div className="flex flex-col items-center">
          <Gift className="w-6 h-6 text-orange-400" />
          <span className="text-black">Đổi Cake</span>
        </div>
      </div>

      {/* Promo Banner */}
      <div className="px-4">
        <div className="bg-white rounded-xl overflow-hidden shadow mb-4 flex justify-center">
          <Image
            src="/qr-code.png"
            alt="QR-Code"
            width={400}
            height={100}
            className="object-cover"
          />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around text-xs py-2 text-gray-600">
        <div className="flex flex-col items-center text-orange-500">
          <Star className="w-5 h-5" />
          <span>Trang chủ</span>
        </div>
        <div className="flex flex-col items-center">
          <Cake className="w-5 h-5" />
          <span>Cửa hàng</span>
        </div>
        <div className="flex flex-col items-center">
          <Gift className="w-5 h-5" />
          <span>Uu đãi</span>
        </div>
        <div className="flex flex-col items-center">
          <ShoppingCart className="w-5 h-5" />
          <span>Khác</span>
        </div>
      </div>
    </div>
  );
}
