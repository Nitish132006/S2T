const SiteFooter = () => (
  <footer className="py-8 bg-foreground">
    <div className="container max-w-5xl mx-auto px-4 text-center">
      <p className="text-sm font-body text-background/60">
        © {new Date().getFullYear()} SAITECH S2T – Schools Towards Technology. All rights reserved.
      </p>
    </div>
  </footer>
);

export default SiteFooter;
