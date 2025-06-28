import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiCalendar,
  HiEnvelope,
  HiMiniMinus,
  HiMiniPlus,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineHome,
  HiOutlineLink,
  HiOutlineMagnifyingGlass,
  HiOutlineShieldCheck,
  HiOutlineShoppingBag,
  HiOutlineShoppingCart,
  HiOutlineSparkles,
  HiOutlineTruck,
  HiOutlineUserGroup
} from "react-icons/hi2";

import { RiVisaLine } from "react-icons/ri";

import { FaDiscord, FaGithub, FaGoogle, FaLinkedin, FaThreads } from "react-icons/fa6";
import { IoShirtOutline } from "react-icons/io5";

export const iconLibrary: Record<string, IconType> = {
  openLink: HiOutlineLink,
  discord: FaDiscord,
  google: FaGoogle,
  github: FaGithub,
  arrowUpRight: HiArrowUpRight,
  minus: HiMiniMinus,
  plus: HiMiniPlus,
  calendar: HiCalendar,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  search: HiOutlineMagnifyingGlass,
  visa: RiVisaLine,
  security: HiOutlineShieldCheck,
  sparkle: HiOutlineSparkles,
  cart: HiOutlineShoppingCart,
  email: HiEnvelope,
  threads: FaThreads,
  linkedin: FaLinkedin,
  bag: HiOutlineShoppingBag,
  people: HiOutlineUserGroup,
  home: HiOutlineHome,
  tshirt: IoShirtOutline,
  delivery: HiOutlineTruck,
  quality: HiOutlineSparkles
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;