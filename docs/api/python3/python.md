## Openapi python and python3 AMNESIA

If you run this command when run `server`:

```shell
python -m openapi_server
```

you'll get the error when you'll run the `client`:

```shell
ValueError: Invalid value for `display_name`, must not be `None`
```

you need run:

```shell
python3 -m openapi_server
```

## gRPC

```
FileNotFoundError: [Errno 2] No such file or directory: 'c++': 'c++'
```

Resolve:

1.

```shell
sudo apt install build-essential
```

> from: <a href='https://github.com/grpc/grpc/issues/24556' class='external'>github.com</a>

2.

```shell
python -m pip install --upgrade pip setuptools wheel
```

> from: <a href='https://packaging.python.org/tutorials/installing-packages/' class='external'>packaging.python.org</a>

## Installing `grpcio`

After that, you can successfully install `grpcio`:

```shell
pip install grpcio grpcio-tools
```

## ModuleNotFoundError: No module named 'example_pb2'

Need to be:

```shell title="example_pb2_grpc.py"
from codegen import example_pb2 as example__pb2
```

## ModuleNotFoundError: No module named 'grpc'

Try:

```shell
deactivate
```

If response is:

```shell
deactivate: command not found
```

Then you need run:

```shell
source env/bin/activate
```

see: [venv isolated dependencies](venv-isolate-dependencies)
