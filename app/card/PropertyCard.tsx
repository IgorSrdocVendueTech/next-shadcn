import { Button } from "@/components/ui/button";
import {
  Bookmark,
  Share2,
  ArrowDown,
  MapPin,
  BedDouble,
  Bath,
  Square,
  ThumbsUp,
} from "lucide-react";

export function PropertyCard() {
  return (
    <div className="w-[342px] p-3 bg-white rounded-lg shadow border border-neutral-300 justify-start items-start inline-flex">
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="justify-start items-center gap-1 flex">
            <div className="px-2.5 py-1 bg-[#f3f8ff] rounded-full border border-[#a6c3e0] justify-center items-center flex">
              <div className="text-[#001f3d] text-xs font-semibold font-['Inter'] leading-none">
                House
              </div>
            </div>
            <div className="px-2.5 py-1 bg-neutral-50 rounded-full border border-gray-200 justify-center items-center flex">
              <div className="text-neutral-600 text-xs font-semibold font-['Inter'] leading-none">
                17 views
              </div>
            </div>
          </div>
          <div className="justify-start items-center gap-2 flex">
            <button className="h-9 px-3 py-1.5 rounded-full justify-center items-center gap-2 flex">
              <Share2 className="w-5 h-5 relative text-neutral-600" />
            </button>
            <button className="h-9 px-3 py-1.5 rounded-full justify-center items-center gap-2 flex">
              <Bookmark className="w-5 h-5 relative text-neutral-600" />
            </button>
          </div>
        </div>
        <div className="self-stretch h-48 flex-col justify-start items-start gap-1.5 flex">
          <div className="self-stretch justify-start items-center gap-2 inline-flex">
            <p className="text-neutral-900 text-2xl font-semibold font-['Inter']">
              99.000 €
            </p>
            <div className="justify-start items-center gap-1 flex">
              <div className="px-2 py-1 bg-green-50 rounded-full border border-green-200 justify-center items-center gap-1 flex">
                <p className="text-green-700 text-xs font-semibold font-['Inter'] leading-none">
                  50%
                </p>
              </div>
              <ArrowDown className="w-4 h-4 relative text-green-700" />
            </div>
          </div>
          <div className="self-stretch justify-start items-start gap-1 inline-flex">
            <div className="text-neutral-900 text-sm font-normal font-['Inter'] leading-tight">
              Est.
            </div>
            <p className="text-neutral-900 text-sm font-normal font-['Inter'] leading-tight">
              165.000,00
            </p>
            <p className="text-neutral-900 text-sm font-normal font-['Inter'] leading-tight">
              €
            </p>
            <p className="text-neutral-900 text-sm font-normal font-['Inter'] leading-tight">
              / mo.
            </p>
          </div>
          <div className="self-stretch justify-start items-center gap-2 inline-flex">
            <MapPin className="w-4 h-4 relative text-neutral-600" />
            <p className="text-neutral-500 text-sm font-normal font-['Inter'] leading-tight w-60">
              Baanhoekweg 25, 3313 LA Dordrecht, Nizozemska
            </p>
          </div>
          <div className="self-stretch justify-start items-start gap-3 inline-flex">
            <div className="justify-start items-center gap-2 flex">
              <BedDouble className="w-4 h-4 relative text-neutral-600" />
              <p className="text-neutral-500 text-sm font-normal font-['Inter'] leading-tight">
                4
              </p>
            </div>
            <div className="justify-start items-center gap-2 flex">
              <Bath className="w-4 h-4 relative text-neutral-600" />
              <p className="text-neutral-500 text-sm font-normal font-['Inter'] leading-tight">
                4
              </p>
            </div>
            <div className="justify-start items-center gap-2 flex">
              <Square className="w-4 h-4 relative text-neutral-600" />
              <p className="text-neutral-500 text-sm font-normal font-['Inter'] leading-tight">
                60m
              </p>
            </div>
          </div>
          <div className="self-stretch pt-3 flex-col justify-start items-start gap-1 flex">
            <div className="self-stretch justify-between items-center inline-flex">
              <p className="text-amber-800 text-sm font-medium font-['Inter'] leading-tight">
                Auction
              </p>
              <p className="text-amber-800 text-sm font-medium font-['Inter'] leading-tight">
                7d : 5h : 59m : 40s
              </p>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <p className="text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">
                Total Bidders
              </p>
              <div className="px-2.5 py-1 bg-neutral-50 rounded-full border border-gray-200 justify-center items-center flex">
                <p className="text-neutral-600 text-xs font-semibold font-['Inter'] leading-none">
                  32
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-2 inline-flex">
          <div className="grow shrink basis-0 h-9 bg-white rounded-md justify-center items-center gap-2 flex">
            <Button
              variant="outline"
              className="grow shrink basis-0 text-center text-neutral-600 text-sm font-medium font-['Inter'] leading-tight"
            >
              View details
            </Button>
          </div>
          <button className="h-9 px-3 py-1.5 rounded-full justify-center items-center gap-2 flex ">
            <ThumbsUp className="w-5 h-5 relative text-neutral-600 hover:text-blue-500 transition-all" />
          </button>
        </div>
      </div>
    </div>
  );
}
