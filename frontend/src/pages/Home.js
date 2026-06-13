import { HeroCinematic } from '@/components/sections/HeroCinematic';
import { ImpactStats } from '@/components/sections/ImpactStats';
import { MissionStory } from '@/components/sections/MissionStory';
import { ProgramsGrid } from '@/components/sections/ProgramsGrid';
import { CampaignHighlights } from '@/components/sections/CampaignHighlights';
import { CommunityImpact } from '@/components/sections/CommunityImpact';
import { InternationalPreview } from '@/components/sections/InternationalPreview';
import { ConversionCTA } from '@/components/sections/ConversionCTA';

export default function Home() {
    return (
        <div data-testid="page-home">
            <HeroCinematic />
            <ImpactStats />
            <MissionStory />
            <ProgramsGrid />
            <CampaignHighlights />
            <CommunityImpact />
            <InternationalPreview />
            <ConversionCTA />
        </div>
    );
}
