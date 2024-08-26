import memojiAvatar1 from "@/assets/avatar-1.png";
import memojiAvatar2 from "@/assets/avatar-2.png";
import memojiAvatar3 from "@/assets/avatar-3.png";
import memojiAvatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import { FrameEffect } from "@/components/FrameEffect";
import { Text } from "@/components/Text";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
];

export const Comments = () => {
  return (
    <div className="container">
      <FrameEffect>
        <Text
          title="What our clients say ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
          titleSize="text-2xl"
        />
      </FrameEffect>
    </div>
  );
};
