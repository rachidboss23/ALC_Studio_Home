import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { site } from "@/config/site";

export function InstagramCta() {
  return (
    <section className="bg-paper py-8 lg:py-10">
      <Container>
        <div className="flex flex-col gap-5 border border-ink/15 bg-sand p-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-5">
            <InstagramIcon className="h-8 w-8 text-ink" />
            <h2 className="font-serif text-2xl">Síguenos en Instagram</h2>
            <span className="text-sm text-stone">{site.instagram.handle}</span>
          </div>
          <Button href={site.instagram.url} external>Ver Instagram</Button>
        </div>
      </Container>
    </section>
  );
}
