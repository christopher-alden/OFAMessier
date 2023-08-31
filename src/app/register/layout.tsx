import ParticleBackground from "../components/Background/ParticleBackground"

export default function RegisterLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <section style={{position: 'relative', zIndex: 0}}>
            <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -50}}>
                <ParticleBackground />
            </div>
            {children}
        </section>
    );
}
