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
    <CardContainer className="w-[33rem]">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#141414] dark:border-white/[0.2] border-black/[0.5] w-auto sm:w-[25rem] h-[25rem] rounded-xl px-4 py-3 border">
        <CardItem
          translateZ="50"
          className="w-full gh-regular text-xl font-bold text-neutral-600 text-center dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="w-full text-neutral-600 text-[13px] max-w-sm mt-2 text-center dark:text-neutral-400 tracking-wide"
        >
          {description}
        </CardItem>
        <CardItem
          translateZ="100"
          className="w-full mt-4 rounded-md border overflow-hidden dark:border-white/[0.2] border-black/[0.2]"
        >
          <img
            src={image}
            height="800"
            width="800"
            className="h-52 w-full object-cover rounded-md group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-8">
          <a href={liveDemoUrl} target="__blank" className="w-32 ml-6 h-10">
            <CardItem
              translateZ={20}
              className="w-full h-full flex items-center justify-center rounded-md bg-[#525252] dark:bg-white dark:text-black text-white text-sm font-bold"
            >
              Go live
            </CardItem>
          </a>
          <a href={githubUrl} target="__blank" className="w-32 mr-6 h-10">
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
