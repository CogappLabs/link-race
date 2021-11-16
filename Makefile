.PHONY: sample

sample:
	head -1000000 exploration/hc_dump_latest.nt > exploration/hc_dump_latest-1e6.nt
