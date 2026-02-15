# fashionblog Tiltfile - runs in k8s/fashionblog/ directory
docker_build(
    'fashionblog',
    '.',
    live_update=[
        sync('./src', '/app/src'),
        sync('./public', '/app/public'),
        sync('./package.json', '/app/package.json'),
        run('touch /tmp/reload', trigger=['./src', './public', './package.json'])
    ],
)

k8s_yaml([
    './deployment.yaml',
    './service.yaml',
    './ingressroute.yaml',
])

k8s_resource('fashionblog', auto_init=True)

