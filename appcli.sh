#!/usr/bin/env bash

CWD=$( cd "$( dirname "${BASH_SOURCE[0]}" )/" && pwd )
cd ${CWD}

# if [[ $# == 0 ]]; then
#     printHelp
#     exit 0
# fi

while [[ $# -gt 0 ]]; do
    case "${1}" in
        echo)
            echo 'hello'
            exit 0
        ;;
        *)
            echo "Unknown parameter: ${1}"
            exit 1
        ;;
    esac

    shift
done