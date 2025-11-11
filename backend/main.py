from app.routes.about_me_routes import about_me_route, router


if __name__ == '__main__': 
    d = {'AboutMe': {
        'about-me': """
        Hey, I’m Jason, a CS student at the University of Toronto Mississauga. I love tinkering with systems and building things that just work.<br /><br />
        I’m an <span class="text-[#56949f]">Arch Linux</span> enthusiast and have a <span class="text-[#ea9d34]">Proxmox</span> homelab where I experiment with servers, containers, and <span class="text-[#f5bde6]">robotics</span> projects. I have tons of ideas I haven’t had the time to build yet, but I’m always sketching out the next one.<br /><br />
        I enjoy improving <span class="text-[#b4637a]">system performance</span>, exploring <span class="text-[#907aa9]">optimization</span>, and automating workflows. I’m always reaching out to friends to start new projects together and introduce them to new tech stacks, keeping learning and collaboration at the core of what I do.
        """, 
        'github': 'https://github.com/sudo-JP', 
        'linkedin': 'https://www.linkedin.com/in/phanductuan/', 
        'mail': 'mailto:jase.phan@mail.utoronto.ca'
    }}
    router.run(debug=True) 



