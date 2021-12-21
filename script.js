console.clear()

new Vue({
  el: '#js-ohgiri',
  
  mounted () {
    for (let i = 0; i < 300; i++) {
      // element
      const snow = this.$refs['snow' + i]

      // 基準のx値
      const baseX = gsap.utils.random(-10, 110)
      
      // 初期配置
      gsap.set(snow, {
        x: baseX + 'vw',
        y: -10,
        opacity: gsap.utils.random(0, 1),
        scale: gsap.utils.random(0, 1)
      })
      
      // 縦方向
      gsap.to(snow, {
        duration: gsap.utils.random(10, 30),
        y: '100vh',
        delay: gsap.utils.random(0, -30),
        repeat: -1,
        ease: 'none'
      })
      
      // 横方向
      gsap.to(snow, {
        duration: gsap.utils.random(5, 15),
        x: baseX + gsap.utils.random(-12, 12) + 'vw',
        yoyo: true,
        repeat: -1,
        delay: gsap.utils.random(-20, -10),
        ease: 'power1.inOut'
      })
    }
  }
})