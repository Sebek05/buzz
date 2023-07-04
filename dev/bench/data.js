window.BENCHMARK_DATA = {
  "lastUpdate": 1688459201885,
  "repoUrl": "https://github.com/chidiwilliams/buzz",
  "entries": {
    "macOS": [
      {
        "commit": {
          "author": {
            "email": "williamschidi1@gmail.com",
            "name": "Chidi Williams",
            "username": "chidiwilliams"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cffd4f4a2e0a9073e753ab7d0671b021b06ff878",
          "message": "Upgrade to 0.8.3 (#520)",
          "timestamp": "2023-07-04T09:18:57+01:00",
          "tree_id": "1723c098aeefd8d2c7bef3c04157899bd34736eb",
          "url": "https://github.com/chidiwilliams/buzz/commit/cffd4f4a2e0a9073e753ab7d0671b021b06ff878"
        },
        "date": 1688459189725,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/transcriber_benchmarks_test.py::test_should_transcribe_and_benchmark[Whisper.cpp - Tiny]",
            "value": 0.07716232621568679,
            "unit": "iter/sec",
            "range": "stddev: 2.462360108098091",
            "extra": "mean: 12.959692236399997 sec\nrounds: 5"
          },
          {
            "name": "tests/transcriber_benchmarks_test.py::test_should_transcribe_and_benchmark[Whisper - Tiny]",
            "value": 0.0444116476995666,
            "unit": "iter/sec",
            "range": "stddev: 0.5243295161714244",
            "extra": "mean: 22.51661561320002 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}