import { DetailPage } from '@/views/DetailPage/ui/DetailPage';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: PageProps) {
    const { id } = await params;
    return <DetailPage id={id} />;
}
