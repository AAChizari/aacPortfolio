import memojiAvatar1 from "@/assets/avatar-1.png";
import memojiAvatar2 from "@/assets/avatar-2.png";
import memojiAvatar3 from "@/assets/avatar-3.png";
import memojiAvatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import grain from "@/assets/grain.jpg";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
];

export const Comments = () => {
  return (
    <div className="py-16">
      <div className="container">
        <SectionHeader
          colorTitle="Happy Clients"
          title="What our clients say"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        />
        <div className="container">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="bg-gray-800 rounded-3xl p-6 mt-6 relative overflow-hidden z-10"
            >
              <div
                className="absolute inset-0 opacity-5 -z-10"
                style={{ backgroundImage: `url(${grain.src})` }}
              ></div>
              <Image src={testimonial.avatar} alt={testimonial.name} />
              <div>{testimonial.name}</div>
              <div>{testimonial.position}</div>
              <p>{testimonial.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
