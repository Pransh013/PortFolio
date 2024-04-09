import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCard({
  image,
  title,
  description,
  liveDemoUrl,
  githubUrl,
}: {
  image: string;
  title: string;
  description: string;
  liveDemoUrl: string;
  githubUrl: string;
}) {
  return (
    <CardContainer className="w-[21rem] lg:w-[24rem]">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black   dark:border-white/[0.4] border-black/[0.5] w-full h-fit rounded-xl px-2 lg:px-4 py-2 sm:py-3 border">
        <CardItem
          translateZ="50"
          className="w-full gh-regular text-xl font-bold text-neutral-600 text-center dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="w-full text-neutral-600 text-[12px] font-medium mt-2 text-center dark:text-neutral-400 tracking-wide"
        >
          {description}
        </CardItem>
        <CardItem
          translateZ="100"
          className="w-full mt-2 rounded-md lg:border overflow-hidden dark:border-white/[0.2] border-black/[0.2]"
        >
          <img
            src={image}
            className="h-44 sm:h-48 w-[95%] mx-auto lg:w-full object-cover rounded-md group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-4 sm:mt-5">
          <a
            href={liveDemoUrl}
            target="__blank"
            className="w-28 lg:w-32 ml-6 h-9 sm:h-10"
          >
            <CardItem
              translateZ={20}
              className="w-full h-full flex items-center justify-center rounded-md bg-[#525252] dark:bg-white dark:text-black text-white text-sm font-bold"
            >
              Go live
            </CardItem>
          </a>
          <a
            href={githubUrl}
            target="__blank"
            className="w-28 lg:w-32 mr-6 h-9 sm:h-10"
          >
            <CardItem
              translateZ={20}
              className="w-full h-full flex items-center justify-center rounded-md bg-[#525252] dark:bg-white dark:text-black text-white text-sm font-bold"
            >
              View Code
            </CardItem>
          </a>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default ThreeDCard;
