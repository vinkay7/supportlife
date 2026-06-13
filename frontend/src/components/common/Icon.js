import {
    Truck, Utensils, GraduationCap, Syringe, Landmark, Flame, Users, BookOpen,
    Briefcase, Droplets, Wheat, HandHeart, Gift, Megaphone, Heart, Sparkles,
} from 'lucide-react';

const MAP = {
    truck: Truck,
    utensils: Utensils,
    'graduation-cap': GraduationCap,
    syringe: Syringe,
    landmark: Landmark,
    flame: Flame,
    users: Users,
    'book-open': BookOpen,
    briefcase: Briefcase,
    droplets: Droplets,
    wheat: Wheat,
    'hand-heart': HandHeart,
    gift: Gift,
    megaphone: Megaphone,
    heart: Heart,
    sparkles: Sparkles,
};

export const Icon = ({ name, className = 'h-5 w-5' }) => {
    const Cmp = MAP[name] || Sparkles;
    return <Cmp className={className} />;
};
