import BasePage, {THEME} from "@/components/BasePage";
import styles from "./yoga.module.css";
import Image from "next/image";
import HeroImage from "@/components/ui/HeroImage";
import Section from "@/components/ui/Section";

export default function Yoga() {
    return (
        <BasePage theme={THEME.LIGHT}>
            <HeroImage imageSrc={"/yoga/yoga-background.jpg"}/>
            <Section imageSrc="/yoga/yoga-hero.jpeg">
                <p>I am a 500 Hour Certified <a href="https://www.baptisteyoga.com/trainer-profile/?user=1910" target="_blank" rel={"noreferrer"}>Baptiste Yoga</a> Instructor, serving the Cleveland community at Cleveland Public Schools and family recreation centers. I also teach in corporate settings, lead workshops and master classes. and facilitate private lessons.</p>
            </Section>
        </BasePage>
    )
}