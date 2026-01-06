function Content() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#303742] text-[16px] w-full">You’ve reached the maximum of 64 selections.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center px-[24px] py-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black w-full">
            <p className="leading-[32px]">Limit Reached</p>
          </div>
          <Content />
        </div>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center min-w-[60px] relative rounded-[4px] shrink-0" data-name="CTA">
      <div className="basis-0 flex flex-col font-['Inter:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#18a87d] text-[16px] text-center">
        <p className="leading-[24px]">Got It</p>
      </div>
    </div>
  );
}

function Action() {
  return (
    <div className="relative shrink-0 w-full" data-name="Action">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[40px] items-center justify-end px-[24px] py-[16px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <Cta />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Modal() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[8px] shadow-[0px_5px_12px_0px_rgba(0,0,0,0.1)] size-full" data-name="Modal">
      <Frame />
      <Action />
    </div>
  );
}