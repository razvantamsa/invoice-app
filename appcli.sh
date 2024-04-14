#!/usr/bin/env bash

CWD=$( cd "$( dirname "${BASH_SOURCE[0]}" )/" && pwd )
cd ${CWD}

# if [[ $# == 0 ]]; then
#     printHelp
#     exit 0
# fi

while [[ $# -gt 0 ]]; do
    case "${1}" in
        start)
            docker compose --env-file /dev/null up "${@:2}"
            exit 0
        ;;
        stop)
            docker compose --env-file /dev/null down
            exit 0
        ;;
        *)
            echo "Unknown parameter: ${1}"
            exit 1
        ;;
    esac

    shift
done